import { Service } from "typedi";
import { ITeamManager } from "../interfaces/teamManager";
import { TeamManager } from "../models/teamManager";
import { IConsultant } from "../interfaces/consultant";
import { Consultant } from "../models/consultant";
import { Credentials } from "../models/credentials";

@Service()
export class TeamManagerService {
  public async createTeamManager(tm: ITeamManager): Promise<ITeamManager> {
    let exists = await this.usernameExists(tm.username);
    if (!exists) {
      const newTM = new TeamManager(tm);
      return newTM.save();
    } else {
      throw new Error("That username is taken");
    }
  }

  public deleteTeamManager(id: string): void {
    TeamManager.findByIdAndDelete(id).exec();
  }

  public getTeamManagerById(id: string): Promise<ITeamManager> {
    return TeamManager.findById(id)
      .populate("consultants")
      .exec();
  }

  public getTeamManager(username?: string) {
    return TeamManager.findOne({ username })
      .populate("consultants")
      .exec();
  }

  //may not actually need this
  public getTeamManagers() {
    return TeamManager.find()
      .populate("consultants")
      .exec();
  }

  //login a TM
  public async validateLogin(credentials: Credentials): Promise<boolean> {
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
    let tm: ITeamManager = await this.getTeamManagerById(tmId);
    let newConsultant: IConsultant;
    if (this.onTeam(tm, consultantId) === -1) {
      newConsultant = await Consultant.findById(consultantId, (err, result) => {
        if (err) {
          return Promise.reject("Consultant not found");
        }
      }).exec();
      if (newConsultant.teamManager) {
        return Promise.reject("This consultant is already on a team");
      }
      newConsultant.teamManager = tm;
      await newConsultant.save();
      tm.consultants.push(newConsultant._id);
      await tm.save();
      return tm;
    } else {
      return Promise.reject("Consultant is already on team");
    }
  }

  //remove a consultant from a TM
  public async removeConsultant(consultantId: string, tmId: string) {
    let tm: ITeamManager;
    tm = await this.getTeamManagerById(tmId);
    let idx: number = this.onTeam(tm, consultantId);
    if (idx === -1) {
      return Promise.reject("Seems this consultant isn't on this team");
    } else {
      let consultant = await Consultant.findById(consultantId).exec();
      consultant.teamManager = undefined;
      await consultant.save();

      tm.consultants.splice(idx, 1);
      await tm.save();

      return tm;
    }
  }

  public getTmConsultants(id: string): Promise<IConsultant[]> {
    return this.getTeamManagerById(id).then(result => {
      console.log(result.consultants);
      return result.consultants;
    });
  }

  private async usernameExists(username: string): Promise<boolean> {
    let exists: ITeamManager;
    exists = await TeamManager.findOne({ username }).exec();
    return exists !== null;
  }

  private onTeam(tm: ITeamManager, consultantId: string): number {
    let idx: number = tm.consultants.findIndex(el => {
      return el._id == consultantId;
    });
    return idx;
  }
}
