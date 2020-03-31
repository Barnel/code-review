import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { HttpStatus } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    const expectedBody = 'Hello World!';
    const path = '/';

    return request(app.getHttpServer())
      .get(path)
      .expect(HttpStatus.OK)
      .expect(expectedBody);
  });
});
