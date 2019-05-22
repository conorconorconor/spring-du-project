import { Service } from "typedi";
import { ITeamManager } from "../interfaces/teamManager";

@Service()
export class TeamManagerService {
  public createTeamManager() {
    return "Make a TM";
  }

  public deleteTeamManager() {
    return "Delete a TM";
  }

  public getTeamManagerById() {
    return "Return a single TM";
  }

  //may not actually need this
  public getTeamManagers() {
    return "Get all the TM's";
  }

  //login a TM
  public validateTeamManager() {
    return "Validate credentials for login";
  }

  //add a consultant to a TM
  public addConsultant(consultantId: string, tm: ITeamManager) {
    return "Add a consultant to this TM";
  }

  //remove a consultant from a TM
  public removeConsultant(consultantId: string, tm: ITeamManager) {
    return "Remove a consultant from this TM";
  }
}
