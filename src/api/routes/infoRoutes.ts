import { Request, Response, Router } from "express";

import { logEndpoint } from "../../utils/logger";
import { InfoController } from "../controllers/infoController";

export function Routes(router: Router) {
  const user = new InfoController();

  router
    .route("/info/:username")
    .get(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.getUserByUserName)
    )
    .put(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.updateUser)
    )
    .delete(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.deleteUser)
    );

  router
    .route("/info")
    .post(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.createUser)
    );
}
