import {ReactNode, ForwardedRef} from 'react';

export interface Title {
  (a?:string | null): number
}

export interface Normalize {
  (a: number): number
}

export interface Source {
  (a?:string | null):(string | null)
}

export interface NewTrack {
  (a: HTMLAudioElement, b?:string | null): void
}

export interface Stop {
  (a: HTMLAudioElement): void 
}

export interface Toggle {
  (a: HTMLAudioElement, b?:string | null): void
}

export interface PlayerLifeCycle {
  (a: PlayerProps, b: PlayerState): void
}

export interface Click {
  (a: string, b: string) : void
}

export interface PlayerState {
  selectedTrack: null | string,
  selectedCover: null | string,
  playerState: null | string,
  timeElapsed: number,
  duration: number
}

export interface PlayerProps {
  tracks: any[],
  tracksLoaded: boolean,
  isDark: boolean,
  ref?: ForwardedRef<any>,
  refAccess?: ForwardedRef<any>
}

export type FancyPlayerProps = {
  children?: ReactNode,
  tracks: any[],
  tracksLoaded: boolean,
  isDark: boolean,
  ref?: ForwardedRef<any>,
  refAccess?: ForwardedRef<any>
}