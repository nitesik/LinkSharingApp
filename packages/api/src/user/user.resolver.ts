import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SuccessMessage } from './models/success-message-model';
import { UserDetailsInput } from './models/user-details.input';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
// import { UserDetailModel } from './models/user-detail.model';
import { UserOutputDTO } from './models/user-output.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => SuccessMessage)
  async addDetails(
    @Args('userDetailsInput') userDetailsInput: UserDetailsInput,
    @CurrentUser() user,
  ): Promise<SuccessMessage> {
    console.log(user);

    const message = await this.userService.addDetails(
      user.user.sub,
      userDetailsInput.firstName,
      userDetailsInput.lastName,
      userDetailsInput.links,
    );

    return message;
  }

  // @Query(() => UserDetailModel)
  // async getDetails(@CurrentUser() user): Promise<UserDetailModel> {
  //   const details = await this.userService.getDetails(user.user.sub);

  //   return details;
  // }

  @UseGuards(AuthGuard)
  @Query(() => UserOutputDTO)
  async getDetails(@CurrentUser() user): Promise<UserOutputDTO> {
    const details = await this.userService.getDetails(user.user.sub);

    return details;
  }
}
