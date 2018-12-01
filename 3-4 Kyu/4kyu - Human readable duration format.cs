public class HumanTimeFormat{
  public static string formatDuration(int s){
    string convert(int value, string name)
    {
      int res = s / value;
      s %= value;
      return res == 0 ? "" : $"{res} {name}{(res > 1 ? "s" : "")}{(s == 0 ? "" : ", ")}";
    }
    string output =  s == 0 ? "now" : convert(60 * 60 * 24 * 365, "year") + convert(60 * 60 * 24, "day") + convert(60 * 60, "hour") + convert(60, "minute")  + convert(1, "second");
    int p = output.LastIndexOf(",");
    return p == -1 ? output : output.Remove(p, 1).Insert(p, " and");
  }
}