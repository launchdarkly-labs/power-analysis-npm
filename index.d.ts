declare module 'power-analysis' {
  interface PowerAnalysisInputs {
    effect?: number;
    sample_size?: number;
    control_mean: number;
    control_sd: number;
    output?: 'sample_size' | 'effect';
    analysis_type?: 'power' | 'precision';
    effect_type?: 'relative' | 'absolute' | 'effect_size';
    distribution?: 'normal' | 'binomial';
    r_squared?: number;
    alternative?: 'two_sided' | 'upper_tailed' | 'lower_tailed';
    alpha?: number;
    power?: number;
    treat_prop?: number;
    sd_ratio?: number;
    var_model?: 'absolute' | 'relative';
    round?: boolean;
    decimal?: number;
  }

  function powerAnalysis(props: PowerAnalysisInputs): number;
  function roundNumber(num: number, decimal: number): number;
  function zQuantile(alpha: number): number;

  interface SampleSizeDurationConversionInputs {
    sample_size?: number | null;
    duration?: number | null;
    exposure_rate?: number | null;
    output?: 'duration' | 'sample_size';
    round?: boolean;
    decimal?: number;
  }

  function sampleSizeDurationConversion(
    props: SampleSizeDurationConversionInputs
  ): number;
}
