namespace WebApplication1.DTOs.Response
{
    public class BaseResponse<T>
    {
        public int StatusCode { get; set; }
        public T? Result { get; set; }
    }
}