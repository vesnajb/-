class Program {
	static String location;
	static DateTime time;

	static void Main(){
		Console.WriteLine(location == null ? "location is null" : location);
		Console.WriteLine(time == null ? "time is null" : time.ToString());

	}
}