export interface AQIIndex {
  Name: string;
  district_name: string;
  Code: string;
  ThaiName: string;
  EngName: string;
  ThaiShortName: string;
  Latitude: string;
  Longitude: string;
  Addr: string;
  District: string;
  District_en: string;
  Province: string;
  LastData: string;
  ThaiCode: string;
  groupid: string;
  groupname: string;
  groupname_en: string;
  status: string;
  Date_Time: string;
  PM10quality: number;
  PM10: number;
  PM25quality: number;
  PM25: number;
  COquality: number;
  CO: number;
  NO2quality: number;
  NO2: number;
  max_aqi: number;
  aqi_img: string;
  aqi_text: string;
}

export interface TStationContext {
  stations: AQIIndex[];
  isLoading: boolean;
  isError: boolean;
  selectedStation: AQIIndex | null;
  setSelectedStation: (station: AQIIndex) => void;
  handleFilterStation: (filterer: (station: AQIIndex) => boolean) => void;
  // use for filtering
  setQuality: (quatity: string) => void;
  setGroupId: (groupId: string) => void;
  setText: (text: string) => void;
}
