import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser()', () => {
    it('fetch user data', () => {
      const mockUser = {
        login: 'johnpapa',
        id: 1202528,
        node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1202528?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/johnpapa',
        html_url: 'https://github.com/johnpapa',
        followers_url: 'https://api.github.com/users/johnpapa/followers',
        following_url: 'https://api.github.com/users/johnpapa/following{/other_user}',
        gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/johnpapa/subscriptions',
        organizations_url: 'https://api.github.com/users/johnpapa/orgs',
        repos_url: 'https://api.github.com/users/johnpapa/repos',
        events_url: 'https://api.github.com/users/johnpapa/events{/privacy}',
        received_events_url: 'https://api.github.com/users/johnpapa/received_events',
        type: 'User',
        site_admin: false,
        name: 'John Papa',
        company: 'JohnPapa.net, LLC',
        blog: 'http://johnpapa.net',
        location: 'Orlando, FL',
        email: null,
        hireable: null,
        bio: 'Winter is Coming',
        twitter_username: 'john_papa',
        public_repos: 144,
        public_gists: 58,
        followers: 15217,
        following: 1,
        created_at: '2011-11-17T17:05:03Z',
        updated_at: '2023-11-01T15:31:38Z'
      };
    
      service.getUser('johnpapa').subscribe(user => {
        expect(user).toEqual(mockUser);
      });
    
      const req = httpMock.expectOne('https://api.github.com/users/johnpapa');
      expect(req.request.method).toBe('GET');
      req.flush(mockUser);
    });
  });
});
