using EternalLegacy.API.ClientContract;
using System.Data;
using System.Data.SqlClient;

namespace EternalLegacy.API.Repository
{
    public class UserRepository
    {
        public IConfiguration _configuration { get; }

        public UserRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<User> GetUserByUserId(int userId)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var users = new List<User>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"];
                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;
                            //TODO : Change GetDistrictCodeName to include Code and Name Separately
                            cmd.CommandText = $"SELECT * FROM User where UserId={userId};";
                            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                            adapter.Fill(ds);
                        }
                    }

                    if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                    {
                        var userRow = ds.Tables[0].Rows[0];
                        int userId = Int32.Parse(userRow["UserId"].ToString());
                        string userEmail = userRow["UserEmail"].ToString();
                        return new User
                        {
                            UserId = userId,
                            UserEmail = userEmail

                        };
                    }
                    return null;
                }
                catch (Exception)
                {
                    throw;
                }
            });
        }

        public async Task<User> GetUserByEmail(string email)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var users = new List<User>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"];
                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;
                            //TODO : Change GetDistrictCodeName to include Code and Name Separately
                            cmd.CommandText = "SELECT * FROM User where UserEmail=@UserEmail;";
                            cmd.Parameters.AddWithValue("@UserEmail", email);
                            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                            adapter.Fill(ds);
                        }
                    }

                    if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                    {
                        var userRow = ds.Tables[0].Rows[0];
                        int userId = Int32.Parse(userRow["UserId"].ToString());
                        string userEmail = userRow["UserEmail"].ToString();
                        return new User
                        {
                            UserId = userId,
                            UserEmail = userEmail

                        };
                    }
                    return null;
                }
                catch (Exception)
                {
                    throw;
                }
            });
        }
        

        public async Task<User> CreateUser(User input)
        {
            return await Task.Run(() =>
            {
                try
                {
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"]; ;
                    
                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;
                            
                            cmd.CommandText = $"INSERT INTO User([UserEmail])VALUES(@UserEmail); SELECT SCOPE_IDENTITY() ";
                            cmd.Parameters.AddWithValue("@UserEmail", input.UserEmail);
                            try
                            {
                                con.Open();
                                var userIdCreated = (int)cmd.ExecuteScalar();
                                input.UserId = userIdCreated;
                            }
                            catch (Exception e)
                            {
                                Console.WriteLine(e);
                                throw;
                            }
                            finally
                            {
                                if (con.State == ConnectionState.Open)
                                {
                                    con.Close();
                                }
                            }
                            return input;
                        }
                    }
                }
                catch (Exception)
                {
                    throw;
                }
            });
        }
    }
}

