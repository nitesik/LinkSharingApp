import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SuccessMessage } from './models/success-message-model';
import { LinkType } from './models/link.input';
import { UserDetailModel } from './models/user-detail.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async addDetails(
    userID: string,
    firstName: string,
    lastName: string,
    links: LinkType[],
  ): Promise<SuccessMessage> {
    try {
      const details = await this.prisma.details.upsert({
        where: {
          userID,
        },
        create: {
          userID,
          firstName,
          lastName,
          Links: {
            createMany: {
              data: links,
            },
          },
        },
        update: {
          firstName,
          lastName,
          Links: {
            deleteMany: {
              detailsUserID: userID,
            },
            createMany: {
              data: links,
            },
          },
        },
      });

      if (!details) throw new Error('Error');

      return { success: 'True' };
    } catch (error) {
      return { success: error };
    }
  }

  async getDetails(userID: string): Promise<UserDetailModel> {
    const details = await this.prisma.details.findFirst({
      where: {
        userID,
      },
    });

    const links = await this.prisma.links.findMany({
      where: {
        detailsUserID: userID,
      },
    });

    const concatenated = { ...details, links };

    return concatenated;
  }
}
