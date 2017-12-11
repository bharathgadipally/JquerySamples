using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JquerySamples
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                DataTable dt = new DataTable("asd");
                dt.Columns.Add(new DataColumn("REVIEWQUESTIONS_DESC"));
                dt.Columns.Add(new DataColumn("ANSWER_YES"));
                dt.Columns.Add(new DataColumn("ANSWER_NO"));
                dt.Columns.Add(new DataColumn("ANSWER_NA"));
                dt.Columns.Add(new DataColumn("INCIDENTREVIEW_NOTES"));

                for (int i = 0; i < 10; i++)
                {
                    dt.Rows.Add();
                    object[] arr = new object[5];
                    arr[0] = "asdasd" + i;
                    arr[1] = true;
                    arr[2] = false;
                    arr[3] = true;
                    if (i == 2 || i==3)
                    {
                        arr[1] = false;
                        arr[2] = false;
                        arr[3] = false;
                    }

                    arr[4] = "asdasdreg" + 2 * 1;
                    dt.Rows[i].ItemArray = arr;
                }

                G2.DataSource = dt;
                G2.DataBind();
            }
        }
    }
}