import { GaugesModule } from './gauges.module';

describe('GaugesModule', () => {
  let gaugesModule: GaugesModule;

  beforeEach(() => {
    gaugesModule = new GaugesModule();
  });

  it('should create an instance', () => {
    expect(gaugesModule).toBeTruthy();
  });
});
