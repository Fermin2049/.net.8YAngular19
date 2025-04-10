using System.ComponentModel.DataAnnotations;

namespace webApiCurso.Models
{
    public class Products
    {
        public int Id { get; set; }
        [Range(0, int.MaxValue, ErrorMessage = "Stock cannot be negative")]
        public int Stock { get; set; }
        [Required]
        [MaxLength(150)]
        public string? Description { get; set; }

    }
}
