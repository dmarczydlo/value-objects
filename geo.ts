class Geo {
  private readonly latitude: number;
  private readonly longitude: number;

  constructor(latitude: number, longitude: number) {
    if (!this.isValidLatitude(latitude)) {
      throw new Error("Invalid latitude value.");
    }
    if (!this.isValidLongitude(longitude)) {
      throw new Error("Invalid longitude value.");
    }
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getLatitude(): number {
    return this.latitude;
  }

  getLongitude(): number {
    return this.longitude;
  }

  distanceTo(other: Geo): number {
    const earthRadiusKm = 6371;

    const lat1 = this.latitude;
    const lon1 = this.longitude;
    const lat2 = other.latitude;
    const lon2 = other.longitude;

    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degreesToRadians(lat1)) *
        Math.cos(this.degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c;

    return distance;
  }

  private degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  private isValidLatitude(latitude: number): boolean {
    return latitude >= -90 && latitude <= 90;
  }

  private isValidLongitude(longitude: number): boolean {
    return longitude >= -180 && longitude <= 180;
  }
}
