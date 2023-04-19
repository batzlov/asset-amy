import { Controller, Post, Req, Request, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard, LocalAuthGuard } from "../guards";
import { AuthService } from "../services";

@Controller("auth")
export default class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("sign-in")
    async signIn(@Request() req) {
        return this.authService.signIn(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("sign-out")
    async signOut(@Req() req, @Res() res) {
        return {};
    }
}
