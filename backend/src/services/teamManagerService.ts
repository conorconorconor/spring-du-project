import { Service } from "typedi";

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
    return "Validate credentials for login"
  }
}