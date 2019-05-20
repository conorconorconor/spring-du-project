import {
  JsonController,
  Get,
  Param,
  Res,
  Body,
  Post
} from "routing-controllers";
import { ConsultantService } from "../services/consultantService";
import { IConsultant } from "../interfaces/consultant";
import { Response } from "express";

@JsonController()
export class ConsultantsController {
  private consultantService: ConsultantService;

  constructor(consultantService: ConsultantService) {
    this.consultantService = consultantService;
  }

  @Get("/consultants")
  public getConsultants(@Res() res: Response) {
    return this.consultantService.getConsultants();
  }

  @Get("/consultants/:id")
  public getConsultantById(@Param("id") id: string): Promise<IConsultant> {
    return this.consultantService.getConsultantById(id);
  }

  @Post("/consultants")
  public createConsultant(@Body() consultant: IConsultant) {
    return this.consultantService.createConsultant(consultant);
  }
}
