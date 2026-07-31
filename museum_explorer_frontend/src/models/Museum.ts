export interface Museum {
  id: string;
  name: string;
  image: string;
  description: string;
  city: string;
  address: string;
  location: {
    latitude: string;
    longitude: string;
  };
}
