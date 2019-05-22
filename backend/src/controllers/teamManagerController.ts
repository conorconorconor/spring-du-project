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

@JsonController()
export class TeamManagerController {
  private tmService: TeamManagerService;

  constructor(tmService: TeamManagerService) {
    this.tmService = tmService;
  }

  //not sure what the routes should be called
  //GET: get all the TM's - maybe without their TM's
  @Get("/users")
  public getTeamManagers() {
    return this.tmService.getTeamManagers();
  }

  //GET: Get a single TM - should include their consultants
  @Get("/users/:id")
  public getTeamManager(@Param("id") id: string) {
    return this.tmService.getTeamManagerById();
  }

  //POST: create a new TM
  @Post("/users")
  public createTeamManager() {
    return this.tmService.createTeamManager();
  }

  //DELETE: delete a TM
  @Delete("/users/:id")
  public deleteTeamManager(@Param("id") id: string) {
    return this.tmService.deleteTeamManager();
  }

  //POST: validate login - should return the corresponding TM with their consultants
  @Post("/users/login")
  public login() {
    if (this.tmService.validateTeamManager()) {
      return "Valid Login";
    } else {
      return "Not Valid";
    }
  }

  //PUT: Adds a consultant to this TM
  @Put("/users/add/:id")
  public addConsultant(
    @Param("id") consultantId: string,
    @Body() user: ITeamManager
  ) {
    return "Adds a consultant to this tm";
  }

  //PUT: Removes a consultant from this TM
  @Put("/users/remove/:id")
  public removeConsultant(
    @Param("id") consultantId: string,
    @Body() user: ITeamManager
  ) {
    return "Removes a consultant from this tm";
  }
}
