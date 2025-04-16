import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpRequest } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

describe('AuthInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthService', ['getToken']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: spy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an Authorization header if a token is present', () => {
    const mockToken = 'mock-token';
    authServiceSpy.getToken.and.returnValue(mockToken);

    httpClient.get('/test-endpoint').subscribe();

    const req = httpMock.expectOne('/test-endpoint');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);
  });

  it('should not add an Authorization header if no token is present', () => {
    authServiceSpy.getToken.and.returnValue(null);

    httpClient.get('/test-endpoint').subscribe();

    const req = httpMock.expectOne('/test-endpoint');
    expect(req.request.headers.has('Authorization')).toBeFalse();
  });
});
