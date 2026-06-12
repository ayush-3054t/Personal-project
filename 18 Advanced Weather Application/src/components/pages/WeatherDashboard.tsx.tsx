import { AlertTriangle, LocateIcon, MapPin, RefreshCcw, Terminal } from "lucide-react"
import { Button } from "../ui/button"
import { useGeolocation } from "../../hooks/useGeolocation"
import LoadingSkeleton from "../LoadingSkeleton";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "../../hooks/useWeather";

const WeatherDashboard = () => {

    const { coordinates, error: LocationError, getLocation, isLoading: LocationLoading } = useGeolocation();

    const weatherQuery = useWeatherQuery(coordinates);
    const forecastQuery = useForecastQuery(coordinates);
    const locationQuery = useReverseGeocodeQuery(coordinates);


    const handleRefresh = () => {
        getLocation();

        if (coordinates) {
            //reload weather data
            weatherQuery.refetch();
            forecastQuery.refetch();
            locationQuery.refetch();
        }
    }


    if (LocationLoading) {
        return <LoadingSkeleton />
    }

    if (LocationError) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Location Error</AlertTitle>
                <AlertDescription className="">
                    <p>{LocationError}</p>
                    <Button onClick={getLocation} variant={"outline"} className="w-fit" >
                        <MapPin className="mr-2 h-4 w-4" />
                        Enable Location
                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    if (!coordinates) {
        return (
            <Alert variant="destructive">
                <AlertTitle>Location Required</AlertTitle>
                <AlertDescription className="flex flex-col gap-4">
                    <p>Please enable location access to see your local weather.</p>
                    <Button onClick={getLocation} variant={"outline"} className="w-fit" >
                        <MapPin className="mr-2 h-4 w-4" />
                        Enable Location
                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    const locationName = locationQuery.data?.[0];

    if (weatherQuery.error || forecastQuery.error) {
        console.log(weatherQuery.error +" "+ forecastQuery.error)
        return (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Location Error</AlertTitle>
                <AlertDescription className="">
                    <p>Failed to fetch weather data. Please try again. </p>
                    <Button onClick={getLocation} variant={"outline"} className="w-fit" >
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        retry
                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    if (!weatherQuery.data || !forecastQuery.data) {
        return <LoadingSkeleton/>
    }






    return (
        <div className="space-y-4">
            {/* Favorite Cities */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold tracking-tight">My Loaction</h1>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={handleRefresh}
                disabled={weatherQuery.isFetching||forecastQuery.isFetching}
                >
                    <RefreshCcw className={`h-4 w-4 ${
                        weatherQuery.isFetching?"animate-spin":""
                        }`} />
                </Button>
            </div>
        </div>
    )
}

export default WeatherDashboard
