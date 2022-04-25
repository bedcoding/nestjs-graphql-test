import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }

  async getHello(): Promise<string> {
    const data = JSON.stringify({
      query: `{
        user(id: 1) {
          id
          name
        }
      }`,
      variables: {},
    });
    try {
      const gqlCall = await firstValueFrom(
        this.httpService.post(
          'https://graphqlzero.almansi.me/api',
          data,
          { headers: { Authorization: `Bearer token` } }, // If required
        ),
      );
      return JSON.stringify(gqlCall.data.data);
    } catch (error) {
      console.log(error.toJSON());
    }
    return 'Error';
  }
}
