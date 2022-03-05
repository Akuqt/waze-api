export interface WazeCoord {
  y: number;
  x: number;
}

export interface WazeSegment {
  fromNode: number;
  ID: number;
  toNode: number;
  isForward: boolean;
}

export interface WazeComment {
  reportMillis: number;
  text: string;
  isThumbsUp: boolean;
}

export interface WazeInfoOptions {
  hideUsers?: boolean;
  hideAlerts?: boolean;
  hideTraffic?: boolean;
}

export interface WazeAlertInfo {
  country: string;
  city: string;
  inscale: boolean;
  isJamUnifiedAlert: boolean;
  reportRating: number;
  confidence: number;
  reliability: number;
  nImages: number;
  type: string;
  uuid: string;
  speed: number;
  reportMood: number;
  roadType: number;
  magvar: number;
  showFacebookPic: boolean;
  subtype: string;
  street: string;
  additionalInfo: string;
  wazeData: string;
  reportDescription?: string;
  location: WazeCoord;
  id: number;
  pubMillis: number;
  reportBy?: string;
  nComments?: number;
  comments?: WazeComment[];
  nThumbsUp?: number;
}

export interface WazeTrafficInfo {
  severity: number;
  country: string;
  city: string;
  line: WazeCoord[];
  segments: WazeSegment[];
  level: number;
  speedKMH: number;
  length: number;
  turnType: string;
  type: string;
  uuid: number;
  endNode: string;
  speed: number;
  roadType: number;
  delay: number;
  updateMillis: number;
  street: string;
  id: number;
  pubMillis: number;
  blockDescription?: string;
  blockingAlertUuid?: string;
  blockExpiration?: number;
  blockingAlertID?: number;
  blockType?: string;
  blockStartTime?: number;
  blockUpdate?: number;
  causeAlert?: WazeAlertInfo;
}

export interface WazeUserInfo {
  fleet: string;
  magvar: number;
  inscale: boolean;
  mood: number;
  addon: number;
  ping: number;
  location: WazeCoord;
  id: string;
  userName: string;
  speed: number;
  ingroup: boolean;
}

export interface WazeInfoResponse {
  endTimeMillis: number;
  startTimeMillis: number;
  startTime: string;
  endTime: string;
  jams?: WazeTrafficInfo[];
  alerts?: WazeAlertInfo[];
  users?: WazeUserInfo[];
}

export interface WazeHistogram {
  timeToLeave: string;
  eta: string;
  routeLengthInMinutes: number;
  text: string;
}

export interface WazePathsOptions {
  from: WazeCoord;
  to: WazeCoord;
  nPaths: number;
  useCase: "LIVEMAP_PLANNING";
  interval: number;
  arriveAt: boolean;
}

export interface WazePathsResponse {
  alternatives: {
    coords: WazeCoord[];
    response: {
      routeName: string;
      areas: any[];
      requiredPermits: any[];
      totalLength: number;
      totalSeconds: number;
      passesThroughDangerArea: boolean;
      isToll: boolean;
      isHOV: boolean;
      isFastest: boolean;
      jams: WazeTrafficInfo[];
      alerts: WazeAlertInfo[];
      label: {
        mapViewLabel: {
          routeTypeLabel: string;
        };
        extraInfoLabel: {
          routeTypeLabel: string;
          trafficStatusLabel: string;
        };
      };
      etaHistograms?: WazeHistogram[];
    };
  }[];
}
