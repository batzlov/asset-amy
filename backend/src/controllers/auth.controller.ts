import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "../guards";
import { AuthService } from "../services";

@Controller("auth")
export default class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("sign-in")
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
