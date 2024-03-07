/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    try {
      const { email, password } = authCredentialDto;

      const user = this.create({ email, password });
      await this.save(user);
    } catch(e){ 
      console.log(e);
    }
  }
  
}
