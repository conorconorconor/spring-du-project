import { Container } from "inversify";
import { ConsultantManager } from "./services/consultantService";

const container: Container = new Container();
container.bind<ConsultantManager>(ConsultantManager).toSelf();

export { container };
