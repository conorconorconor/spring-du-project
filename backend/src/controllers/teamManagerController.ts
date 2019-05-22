import {
  JsonController,
  Get,
  Post,
  Delete,
  Param,
  Put,
  Body
} from "routing-controllers";
import { TeamManagerService } from "../services/teamManagerService";
import { ITeamManager } from "../interfaces/teamManager";
import { Credentials } from "../models/credentials";

@JsonController()
export class TeamManagerController {
  private tmService: TeamManagerService;

  constructor(tmService: TeamManagerService) {
    this.tmService = tmService;
  }

  //not sure what the routes should be called
  //GET: get all the TM's - maybe without their consultants
  @Get("/users")
  public getTeamManagers() {
    return this.tmService.getTeamManagers();
  }

  //GET: Get a single TM - should include their consultants
  @Get("/users/:id")
  public getTeamManager(@Param("id") id: string) {
    return this.tmService.getTeamManagerById(id);
  }

  //POST: create a new TM
  @Post("/users")
  public createTeamManager(@Body() tm: ITeamManager) {
    return this.tmService.createTeamManager(tm);
  }

  //DELETE: delete a TM
  @Delete("/users/:id")
  public deleteTeamManager(@Param("id") id: string) {
    return {
      message: `Deleted Tm with id: ${id}`
    };
  }

  //POST: validate login - should return the corresponding TM with their consultants
  @Post("/users/login")
  public async login(
    @Body() credentials: Credentials
  ): Promise<ITeamManager | string> {
    let loginIsValid = await this.tmService.validateLogin(credentials);
    if (loginIsValid) {
      return this.tmService.getTeamManager(credentials.username);
    } else {
      return "Not a valid login";
    }
  }

  //PUT: Adds a consultant to this TM
  @Put("/users/add/:id")
  public addConsultant(
    @Param("id") consultantId: string,
    @Body() user: ITeamManager
  ) {
    return this.tmService.addConsultant(consultantId, user._id);
  }

  //PUT: Removes a consultant from this TM
  @Put("/users/remove/:id")
  public removeConsultant(
    @Param("id") consultantId: string,
    @Body() user: ITeamManager
  ) {
    return this.tmService.removeConsultant(consultantId, user._id);
  }
}
