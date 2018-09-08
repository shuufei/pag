import { OrganismsModule } from './organisms.module';

describe('OrganismsModule', () => {
  let organismsModule: OrganismsModule;

  beforeEach(() => {
    organismsModule = new OrganismsModule();
  });

  it('should create an instance', () => {
    expect(organismsModule).toBeTruthy();
  });
});
