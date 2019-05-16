import { Controller, Get, Param, Put, Body, Post, Delete } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDTO, UserRO } from './user.entity'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserRO[]> {
    try {
      const users = await this.userService.findAll()

      return users.map((user) => user.toReponseObject())
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserRO> {
    try {
      const user = await this.userService.findById(id)

      return user.toReponseObject()
    } catch (error) {
      throw error
    }
  }

  @Put()
  async create(@Body() data: UserDTO): Promise<UserRO> {
    try {
      const user = await this.userService.create(data)

      return user.toReponseObject()
    } catch (error) {
      throw error
    }
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UserDTO,
  ): Promise<UserRO> {
    try {
      const user = await this.userService.update(id, data)

      return user.toReponseObject()
    } catch (error) {
      throw error
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return this.userService.delete(id)
    } catch (error) {
      throw error
    }
  }
}
