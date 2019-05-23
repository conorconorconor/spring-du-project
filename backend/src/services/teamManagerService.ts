import { Service } from "typedi";
import { ITeamManager } from "../interfaces/teamManager";
import { TeamManager } from "../models/teamManager";
import { IConsultant } from "../interfaces/consultant";
import { Consultant } from "../models/consultant";
import { Credentials } from "../models/credentials";

@Service()
export class TeamManagerService {
  public async createTeamManager(tm: ITeamManager): Promise<ITeamManager> {
    // return "Make a TM";
    if (await this.usernameExists(tm.username)) {
      const newTM = new TeamManager(tm);
      return newTM.save();
    } else {
      throw new Error("That username is taken");
    }
  }

  public deleteTeamManager(id: string): void {
    // return "Delete a TM";
    TeamManager.findByIdAndDelete(id).exec();
  }

  public getTeamManagerById(id: string): Promise<ITeamManager> {
    // return "Return a single TM";
    return TeamManager.findById(id)
      .populate("consultants")
      .exec();
  }

  public getTeamManager(username?: string) {
    return TeamManager.findOne({ username }).exec();
  }

  //may not actually need this
  public getTeamManagers() {
    return TeamManager.find()
      .populate("consultants")
      .exec();
  }

  //login a TM
  public async validateLogin(credentials: Credentials): Promise<boolean> {
    // return "Validate credentials for login";
    let isValid = false;
    let tm = await TeamManager.findOne({
      username: credentials.username,
      password: credentials.password
    });
    if (tm) {
      isValid = true;
    }
    return isValid;
  }

  //add a consultant to a TM
  public async addConsultant(consultantId: string, tmId: string) {
    // return "Add a consultant to this TM";
    let tm: ITeamManager;
    let newConsultant: IConsultant;
    await Consultant.findById(consultantId, (err, result) => {
      if (err) {
        throw new Error("Consultant not found");
      }
      newConsultant = result;
    });
    tm = await this.getTeamManagerById(tmId);
    tm.consultants.push(newConsultant._id);
    await tm.save();
    return tm;
  }

  //remove a consultant from a TM
  public async removeConsultant(consultantId: string, tmId: string) {
    // return "Remove a consultant from this TM";
    let tm: ITeamManager;
    tm = await this.getTeamManagerById(tmId);
    let idx: number = tm.consultants.findIndex(el => {
      return el._id == consultantId;
    });
    if (idx === -1) {
      throw new Error("Seems this consultant isn't on this team");
    }
    tm.consultants.splice(idx, 1);
    await tm.save();
    return tm;
  }

  public getTmConsultants(id: string): Promise<IConsultant[]> {
    return this.getTeamManagerById(id).then(result => {
      console.log(result.consultants);
      return result.consultants;
    });
  }

  private async usernameExists(username: string) {
    let exists: boolean;
    await TeamManager.find({ username }, (_, doc) => {
      if (!doc.length) {
        exists = true;
      } else {
        exists = false;
      }
    });

    return exists;
  }
}
