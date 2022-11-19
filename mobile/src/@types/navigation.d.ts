export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export interface MatchParams {
  id: string;
  timeA: string;
  timeB: string;
  placarTimeA: string;
  placarTimeB: string;
  imgTimeA: string;
  imgTimeB: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
