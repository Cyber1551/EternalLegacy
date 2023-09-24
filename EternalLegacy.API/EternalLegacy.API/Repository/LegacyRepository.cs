using EternalLegacy.API.ClientContract;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace EternalLegacy.API.Repository
{
    public class LegacyRepository
    {
        public IConfiguration _configuration { get; }

        public LegacyRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<Legacy> GetLegacyByLegacyId(int legacyId)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var legacies = new List<Legacy>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"]; ;

                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;
                            //TODO : Change GetDistrictCodeName to include Code and Name Separately
                            cmd.CommandText = $"SELECT * FROM Legacy where legacyId={legacyId};";
                            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                            adapter.Fill(ds);
                        }
                    }

                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        int legacyId = Int32.Parse(row["LegacyId"].ToString());
                        string name = row["Name"].ToString();
                        int legacyType = Int32.Parse(row["LegacyType"].ToString());
                        int dateType = Int32.Parse(row["DateType"].ToString());
                        DateTime openDate = DateTime.Parse(row["OpenDate"].ToString());
                        bool isPublished = row["Published"].ToString() == "1";
                        legacies.Add(new Legacy()
                        {
                            LegacyId = legacyId,
                            Name = name,
                            OpenDate = openDate,
                            IsPublished = isPublished,
                            LegacyType = Common.LegacyType.Memorium,
                            DateType = dateType,
                        });
                    }
                    return legacies.First();
                }
                catch (Exception)
                {
                    throw;
                }
            });
        }

        public async Task<IEnumerable<Legacy>> GetLegaciesByUserEmail(string email)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var legacies = new List<Legacy>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"]; ;

                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;
                            //TODO : Change GetDistrictCodeName to include Code and Name Separately
                            cmd.CommandText = $"SELECT * FROM Legacy as le INNER JOIN UserRole AS ur ON le.LegacyId = ur.LegacyId INNER JOIN Users as u ON ur.UserId = u.UserId WHERE u.UserEmail = '{email}';";
                            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                            adapter.Fill(ds);
                        }
                    }

                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        int legacyId = Int32.Parse(row["LegacyId"].ToString());
                        string name = row["Name"].ToString();
                        int legacyType = Int32.Parse(row["LegacyType"].ToString());
                        DateTime openDate = DateTime.Parse(row["OpenDate"].ToString());
                        bool isPublished = row["Published"].ToString() == "1";
                        legacies.Add(new Legacy()
                        {
                            LegacyId = legacyId,
                            Name = name,
                            OpenDate = openDate,
                            IsPublished = isPublished,
                            LegacyType = Common.LegacyType.Memorium,


                        });
                    }
                    return legacies;
                }
                catch (Exception)
                {
                    throw;
                }
            });
        }

        public async Task<Legacy> CreateNewLegacy(Legacy input)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var legacies = new List<Legacy>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"];

                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;

                            cmd.CommandText = @"
                                INSERT INTO Legacy([Name],[LegacyType],[OpenDate],[Published],[DateType])
                                OUTPUT INSERTED.LegacyId
                                VALUES(@Name,@LegacyType,@OpenDate,@Published,@DateType)";

                            cmd.Parameters.AddWithValue("@Name", input.Name);
                            cmd.Parameters.AddWithValue("@LegacyType", input.LegacyType);
                            cmd.Parameters.AddWithValue("@OpenDate", input.OpenDate);
                            cmd.Parameters.AddWithValue("@Published", input.IsPublished);
                            cmd.Parameters.AddWithValue("@DateType", input.DateType);

                            con.Open();

                            var legacyIdCreated = (int)cmd.ExecuteScalar();
                            input.LegacyId = legacyIdCreated;

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

        public async Task<bool> CreateUserRole(int id)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var legacies = new List<Legacy>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"];

                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;

                            cmd.CommandText = @"
                                INSERT INTO UserRole([UserId],[LegacyId],[Role])
                                OUTPUT INSERTED.UserRoleId
                                VALUES(@UserId,@LegacyId,@Role)";

                            cmd.Parameters.AddWithValue("@UserId", 1);
                            cmd.Parameters.AddWithValue("@LegacyId", id);
                            cmd.Parameters.AddWithValue("@Role", 1);
    

                            con.Open();

                            var legacyIdCreated = (int)cmd.ExecuteScalar();
                            return true;
                        }
                    }

                }
                catch (Exception)
                {
                    throw;
                }
            });

        }

        public async Task<IEnumerable<LegacyContent>> GetLegacyContentByLegacyId(int legacyId)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var legacyContent = new List<LegacyContent>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"];

                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;
                            //TODO : Change GetDistrictCodeName to include Code and Name Separately
                            cmd.CommandText = $"SELECT * FROM LegacyContent WHERE LegacyId = {legacyId};";
                            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                            adapter.Fill(ds);
                        }
                    }

                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        int legacyId = Int32.Parse(row["LegacyId"].ToString());
                        int legacyContentId = Int32.Parse(row["LegacyContentId"].ToString());
                        int contentOrder = Int32.Parse(row["ContentOrder"].ToString());
                        int contentType = Int32.Parse(row["ContentType"].ToString());
                        string contentId = row["ContentId"].ToString();
                        string caption = row["Caption"].ToString();
                        DateTime date = DateTime.Parse(row["Date"].ToString());
                        //int dateType = Int32.Parse(row["DateType"].ToString());

                        legacyContent.Add(new LegacyContent()
                        {
                            LegacyContentId = legacyContentId,
                            LegacyId = legacyId,
                            Order = contentOrder,
                            ContentId = contentId,
                   
                            ContentType = contentType,
                            Caption = caption,
                            Date = date,
                            DateType = Common.DateType.Time, //CHANGE LATER
                        });
                    }
                    return legacyContent;
                }
                catch (Exception)
                {
                    throw;
                }
            });
        }

        public async Task<bool> CreateNewLegacyContent(LegacyContent input)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var legacyContent = new List<LegacyContent>();
                    DataSet ds = new DataSet();
                    string connectionString = _configuration["Databases:EternalLegacyConnection:ConnectionString"]; ;

                    using (SqlConnection con = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand())
                        {
                            cmd.Connection = con;
                            cmd.CommandType = CommandType.Text;
                            //TODO : Change GetDistrictCodeName to include Code and Name Separately
                            cmd.CommandText = $"INSERT INTO LegacyContent ([LegacyContentId] ,[LegacyId] ,[ContentOrder] ,[ContentId] ,[Caption] ,[Date] ,[DateType]) VALUES ({input.LegacyContentId}, {input.LegacyId}, {input.Order}, '{input.ContentId}', '{input.Caption}', {input.Date}, {input.DateType});";
                            cmd.CommandText = @"
                                INSERT INTO LegacyContent([LegacyId] ,[ContentOrder] ,[ContentId] ,[Caption] ,[Date] ,[ContentType])
                                OUTPUT INSERTED.LegacyContentId
                                VALUES(@LegacyId,@ContentOrder,@ContentId,@Caption,@Date,@ContentType)";

                            cmd.Parameters.AddWithValue("@LegacyId", input.LegacyId);
                            cmd.Parameters.AddWithValue("@ContentOrder", 1);
                            cmd.Parameters.AddWithValue("@ContentId", input.ContentId);
                            cmd.Parameters.AddWithValue("@Caption", input.Caption);
                            cmd.Parameters.AddWithValue("@Date", input.Date);
                            cmd.Parameters.AddWithValue("@ContentType", input.ContentType);


                            con.Open();

                            var legacyIdCreated = (int)cmd.ExecuteScalar();
                        }
                    }

                    return true;
                }
                catch (Exception)
                {
                    throw;
                }
            });
        }
    }
}

