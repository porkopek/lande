
/* IMPORT */

import path from 'node:path';
import type {Config} from './types';

/* MAIN */

const DATASET_PATH = path.join ( process.cwd (), 'resources', 'dataset.csv' );

const DATASET_BENCHMARK_LIMIT = 1000;

const DATASET_TRAIN_LIMIT = 8000;

const DATASET_TEST_LIMIT = 30000;

const DATASET_TRAIN_PERC = 0.8;

const DUMMY_BUFFER = new Float32Array ();

const TOP50_LANGS = ['eng', 'deu', 'fra', 'ita', 'rus', 'tur', 'fin', 'heb', 'hun', 'jpn', 'nld', 'pol', 'por', 'spa', 'ukr', 'ces', 'cmn', 'dan', 'lit', 'mar', 'mkd', 'swe', 'ara', 'ell', 'pes', 'ron', 'srp', 'bel', 'bul', 'ckb', 'hau', 'hin', 'ind', 'isl', 'kor', 'nob', 'slk', 'tgl', 'vie', 'aze', 'ben', 'cat', 'eus', 'hrv', 'hye', 'kat', 'run', 'afr', 'est', 'kaz'].sort ();

const TOP50_CONFIG: Config = {
  id: 't50',
  langs: TOP50_LANGS,
  network: {
    batchSize: 1,
    epochs: 5,
    unigrams: {
      input: 100,
      hidden: 70,
      output: TOP50_LANGS.length
    },
    bigrams: {
      input: 275,
      hidden: 70,
      output: TOP50_LANGS.length
    },
    trigrams: {
      input: 275,
      hidden: 70,
      output: TOP50_LANGS.length
    },
    omnigrams: {
      input: TOP50_LANGS.length * 3,
      hidden: 70,
      output: TOP50_LANGS.length
    }
  }
};

const CONFIGS = [TOP50_CONFIG];

/* EXPORT */

export {DATASET_PATH, DATASET_BENCHMARK_LIMIT, DATASET_TRAIN_LIMIT, DATASET_TEST_LIMIT, DATASET_TRAIN_PERC};
export {DUMMY_BUFFER};
export {TOP50_LANGS, TOP50_CONFIG, CONFIGS};
