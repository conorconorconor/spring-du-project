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
  public getConsultantById(@Param("id") id: number): IConsultant {
    try {
      return this.consultantService.getConsultantById(id);
    } catch (e) {
      return e;
    }
  }

  @Post("/consultants")
  public createConsultant(@Body() consultant: IConsultant) {
    try {
      return this.consultantService.createConsultant(consultant);
    } catch (e) {
      return e;
    }
  }
}
