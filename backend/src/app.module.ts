import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { jwtConfig } from "./config/config";
import {
    AppController,
    AssetsController,
    AuthController,
    ExpensesController,
    RevenuesController,
    UsersController,
} from "./controllers";
import {
    AppService,
    AssetsService,
    AuthService,
    ExpensesService,
    RevenuesService,
    UsersService,
} from "./services";
import { JwtStrategy, LocalStrategy } from "./strategies";

@Module({
    imports: [
        JwtModule.register({
            secret: jwtConfig.secret,
            signOptions: { expiresIn: "3600s" },
        }),
        PassportModule,
    ],
    controllers: [
        AuthController,
        AppController,
        UsersController,
        ExpensesController,
        AssetsController,
        RevenuesController,
    ],
    providers: [
        AppService,
        AuthService,
        UsersService,
        ExpensesService,
        AssetsService,
        RevenuesService,
        LocalStrategy,
        JwtStrategy,
    ],
})
export class AppModule {}
