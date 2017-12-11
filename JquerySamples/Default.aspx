<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JquerySamples._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <br/>
    <br/>

    <div class="row">
        <asp:GridView ID="G2" ShowHeader="False" runat="server" AutoGenerateColumns="False">
            <HeaderStyle BorderStyle="Solid" HorizontalAlign="Left" BackColor="LightGray" />
            <FooterStyle BorderWidth="1px" BorderStyle="Solid" BackColor="LightGray" />
            <RowStyle CssClass="gridRows" />
            <Columns>
                <asp:BoundField DataField="REVIEWQUESTIONS_DESC" />
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:CheckBox ID="chkbox_Yes" runat="server"  Checked='<%# bool.Parse(Eval("ANSWER_YES").ToString())%>' />
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:CheckBox ID="chkbox_No" runat="server" Checked='<%# bool.Parse(Eval("ANSWER_NO").ToString())%>' />
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:CheckBox ID="chkbox_NA" runat="server" Checked='<%# bool.Parse(Eval("ANSWER_NA").ToString())%>' />
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:TextBox runat="server" CssClass="NoLine" ID="txtbox_Notes" Text='<%# Eval("INCIDENTREVIEW_NOTES")%>'></asp:TextBox>
                    </ItemTemplate>
                </asp:TemplateField>
            </Columns>
        </asp:GridView>
    </div>
    `<script type="text/javascript">
         $(function () {
             $('#MainContent_G2 > tbody  > tr').each(function (index, row) {
                 var checkedArr = $(row).find('input[type="checkbox"]:checked');
                 if (checkedArr.length === 0) {
                     var textbox = $(row).find('input[type="text"]');
                     $(textbox).attr('readonly', true);
                 }

                 $(row).find('input[type="checkbox"]').each(function(index, checkbox) {
                     $(checkbox).change(function () {
                         if (this.checked) {
                             $(this).closest("tr").find('input[type="text"]').attr('readonly', false);
                         }

                         var checkedArr = $(row).find('input[type="checkbox"]:checked');
                         if (checkedArr.length === 0) {
                             var textbox = $(row).find('input[type="text"]');
                             $(textbox).attr('readonly', true);
                         }
                     });
                 });

             });
         });
         
     </script>
</asp:Content>
