/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.37
 * Generated at: 2015-12-24 15:42:22 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n");
      out.write("<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n");
      out.write("<head>\r\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n");
      out.write("<meta name=\"keywords\" content=\"ä¼ä¸ç®ä»\" />\r\n");
      out.write("<meta name=\"description\"\r\n");
      out.write("\tcontent=\"ä¸­å½ç©æµæéå¬å¸æ¯å½å¡é¢å½èµå§çç®¡çå¤§åä¼ä¸éå¢ââä¸­å½è¯éæ§è¡éå¢æéå¬å¸æ§è¡çæåä¼ä¸ï¼ä¸»è¦æä¾éè·¯åå¬è·¯è¿è¾ãå¬è·¯-éè·¯-æ°´è¿èè¿ãå½éè´§è¿ä»£çãä»å¨ãééãçäº§åéå®çä¾åºé¾ç®¡çãç©æµéèç­ç»¼åç©æµæå¡ãç¹å«æ¯å¨çéå¿«éæ¶è´¹åãè£å¤å¶é ä¸ç­è¡ä¸é¢åï¼å·å¤äºæççæå¡è½ååæ åä½ç³»ï¼å½¢æäºç¬ç¹çç«äºä¼å¿ãä¸­å½ç©æµæéå¬å¸åå·åå¬å¸æ¯ä¸­å½ç©æµæéå¬å¸ç³»ç»åéç¹ä¼ä¸ãä¼ç§ä¼ä¸ï¼æ»é¨è®¾æé½å¸é«æ°åºï¼...\" />\r\n");
      out.write("<title>ä¼ä¸ç®ä»-ä¸­å½ç©æµæéå¬å¸åå·åå¬å¸</title>\r\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"Tp1/Css/Main.css\" />\r\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"Tp1/Css/Style.css\" />\r\n");
      out.write("<style type=\"text/css\">\r\n");
      out.write("body, td, th {\r\n");
      out.write("\tcolor: #333333;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("body {\r\n");
      out.write("\tbackground-color: #FFFFFF;\r\n");
      out.write("}\r\n");
      out.write("</style>\r\n");
      out.write("<script type=\"text/javascript\" src=\"Tp1/JScript/jquery-1.9.1.min.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"Tp1/JScript/Comm.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"Tp1/JScript/SlideClass.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"Tp1/sysResource/index.js\"></script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<div class=\"Display\"></div>\r\n");
      out.write("\t<!--å¬å±é¡¶é¨-->\r\n");
      out.write("\t<div id=\"global-top\">\r\n");
      out.write("\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t<div class=\"logo\">\r\n");
      out.write("\t\t\t\t<a href=\"index.php\"><img src=\"images/logo.jpg\" width=\"354\"\r\n");
      out.write("\t\t\t\t\theight=\"100\" alt=\"ç½ç«logo\" /></a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<!--å¬å±å¯¼èª -->\r\n");
      out.write("\t\t\t<div id=\"global-nav\">\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t<ul>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"index.php\">ç½ç«é¦é¡µ</a></li>\r\n");
      out.write("\t\t\t\t\t<li class=\"onfocus\"><a href=\"IntroNews.php?tag=gywm\">å³äºæä»¬</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"IntroNews.php?tag=ywlx\">ä¸å¡ç±»å</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"News_List.php?tag=GuestBook\">å®¢æ·æå¡</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"News_List.php?tag=xwzx\">æ°é»ä¸­å¿</a></li>\r\n");
      out.write("\t\t\t\t\t<li><a href=\"Intro.php?tag=lxwm\">èç³»æä»¬</a></li>\r\n");
      out.write("\t\t\t\t</ul>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"tongdao\">\r\n");
      out.write("\t\t\t\t<a href=\"http://210.14.144.220/seeyon/index.jsp\"\r\n");
      out.write("\t\t\t\t\tstyle=\"color: #fff;\">åå·¥éé</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div id=\"ejMain\">\r\n");
      out.write("\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t<div id=\"left\">\r\n");
      out.write("\t\t\t\t<div id=\"leftNav\">\r\n");
      out.write("\t\t\t\t\t<div class=\"title\">\r\n");
      out.write("\t\t\t\t\t\t<em>è®¢åä¸­å¿</em><span>ORDER CENTER</span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"right\">\r\n");
      out.write("\t\t\t\t<div id=\"rightTop\">\r\n");
      out.write("\t\t\t\t\t<span> å½åä½ç½®ï¼ <a href=\"http://www.cd56.cn/\">ç½ç«é¦é¡µ</a>\r\n");
      out.write("\t\t\t\t\t\t&nbsp;&gt;&nbsp; <strong>è®¢åä¸­å¿</strong>\r\n");
      out.write("\t\t\t\t\t</span>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<!--æ¥è¯¢åºå-->\r\n");
      out.write("\t\t\t<div id=\"contentContent\">\r\n");
      out.write("\t\t\t\t<div id=\"queryOne\">\r\n");
      out.write("\t\t\t\t\t<div class=\"state\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"stateFont Font select\" id=\"KHDDspan\">å®¢æ·è®¢åå·</span><span class=\"stateFont Font FontMargin\" id=\"KHQSDspan\">å®¢æ·ç­¾æ¶è®¢åå·</span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div id=\"queryKHDD\" class=\"query\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"search\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"input\" placeholder=\"è¯·è¾å¥å®¢æ·è®¢åå· \" id=\"KHDDtxt\"/> <input\r\n");
      out.write("\t\t\t\t\t\t\t\t\ttype=\"button\" class=\"queryClick\" style=\"cursor: pointer\" id=\"KHDDbtn\"\r\n");
      out.write("\t\t\t\t\t\t\t\t\tonclick=\"blinkitKHDD(this)\" value=\"æ¥è¯¢\" />\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"Conition\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"ConitionTitle\">\r\n");
      out.write("\t\t\t\t\t\t\t\tè¯·éæ©<span>X</span>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"Gray\"></div>\r\n");
      out.write("\t\t\t\t\t\t\t<ul id=\"ConitionKHDDul\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div id=\"queryKHQSD\" class=\"query\" hidden=\"true\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"search\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" class=\"input\" placeholder=\"è¯·è¾å¥å®¢æ·ç­¾æ¶åå· \" /> <input\r\n");
      out.write("\t\t\t\t\t\t\t\t\ttype=\"button\" class=\"queryClick\" style=\"cursor: pointer\"\r\n");
      out.write("\t\t\t\t\t\t\t\t\tonclick=\"blinkit(this)\" value=\"æ¥è¯¢\" />\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"Conition\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"ConitionTitle\">\r\n");
      out.write("\t\t\t\t\t\t\t\tè¯·éæ©<span>X</span>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"Gray\"></div>\r\n");
      out.write("\t\t\t\t\t\t\t<ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"ConitionCol\"><span class=\"ConitionOn\">é¡¹ç®åç§°ç²¾åç¹æ²</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>30157004</span> <span>50246592</span> <span>æåç/å¥³å£«</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>123****5565</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><span class=\"ConitionOn\">ç²¾åç¹æ²</span> <span>30157004</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>50246592</span> <span>å§åç/å¥³å£«</span> <span>159****6785</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><span class=\"ConitionOn\">é¡¹ç®åç§°ç²¾åç¹æ²</span> <span>30157004</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>50246592</span> <span>æåç/å¥³å£«</span> <span>123****5565</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><span class=\"ConitionOn\">ç²¾åç¹æ²é</span> <span>30157004</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>50246592</span> <span>ä½åç/å¥³å£«</span> <span>138****5565</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<!--æ¥è¯¢åºåç»æ-->\r\n");
      out.write("\t\t\t<!--è®¢åç¶æåºå-->\r\n");
      out.write("\t\t\t<div id=\"contentContent\">\r\n");
      out.write("\t\t\t\t<div id=\"border\">\r\n");
      out.write("\t\t\t\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"state\">\r\n");
      out.write("\t\t\t\t\t\t\t<span class=\"stateFont\">è®¢åå·<span class=\"Font\">11223</span></span>\r\n");
      out.write("\t\t\t\t\t\t\t<span class=\"stateFont\">è®¢åç¶æ<span class=\"Font\">å·²èµ·è¿</span></span>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"schedule\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"first\"><img src=\"images/ZT-1.png\" /><span\r\n");
      out.write("\t\t\t\t\t\t\t\t\tclass=\"firat\"></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"stateFont\">å·²ä½æ</p></li>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><img src=\"images/ZT-2.png\" /><span></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"stateFont\">å·²æ¥æ¶</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><img src=\"images/ZT-3.png\" /><span></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"stateFont\">å·²æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><img src=\"images/ZT-3.png\" /><span></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"stateFont\">å·²èµ·è¿</p></li>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"scheduleBg\"><img src=\"images/ZT,3.png\" /><span></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"stateFont\">å·²å°è¾¾</p></li>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"scheduleBg\"><img src=\"images/ZT,5.png\" />\r\n");
      out.write("\t\t\t\t\t\t\t\t<p class=\"stateFont\">è¿è¾å®æ</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<!--è®¢åç¶æç»æ-->\r\n");
      out.write("\t\t\t<!--è®¢åä¿¡æ¯åºå-->\r\n");
      out.write("\t\t\t<div id=\"contentContent\">\r\n");
      out.write("\t\t\t\t<div id=\"borderLast\">\r\n");
      out.write("\t\t\t\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"Route\">\r\n");
      out.write("\t\t\t\t\t\t\t<span class=\"stateFont \">è®¢åä¿¡æ¯</span>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"fixed Font_Color TopColor\">\r\n");
      out.write("\t\t\t\t\t\t\t<ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>é¡¹ç®åç§°</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>ç²¾åç¹æ²</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>å®¢æ·ç­¾æ¶å</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>30157004</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>åéæ¹</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>ä¸­å½ç©æµæéå¬å¸</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>æ»è·¯ç¨æ°</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>44.2åç±³</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"fixed Font_Color TopColor\">\r\n");
      out.write("\t\t\t\t\t\t\t<ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>ç´§æ¥ç¨åº¦</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>æ®é</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>è¿è¾ç±»å</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>é¨å°é¨</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"fixed Font_Color TopColor\">\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"Width\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>è¿è¾è·¯çº¿</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span>(ç²¾åç¹æ²)æé½éç½æ±å°åå·çæé½å¸æ­¦ä¾¯åº</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"fixed Font_Color TopColor\">\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"Width\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<p>å®¢æ¿ä½ä¸å</p> <span>50246592</span> <span>50246592</span> <span>50246592</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<!--è®¢åè·è¸ªåºå-->\r\n");
      out.write("\t\t\t<div id=\"contentContent\">\r\n");
      out.write("\t\t\t\t<div id=\"border\">\r\n");
      out.write("\t\t\t\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"Route\">\r\n");
      out.write("\t\t\t\t\t\t\t<span class=\"stateFont \">è®¢åè·è¸ª</span>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"track Top\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"margin\"><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"margin\"><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"margin\"><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"margin\"><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"margin\"><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"margin\"><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"track newline\"><p>30157004</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"Title Top\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><p>æ¶é´</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"news\"><p>å¨éä¿¡æ¯</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"name\"><p>è·è¸ªç¶æ</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"name\"><p>è½¦çå·</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"name\"><p>è·è¸ªäºº</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementTwo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\">2015-12-04</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">16:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title \">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<p>æ¨çè®¢åå·²ç»åå¤åºåºï¼æ­£å¨ç»è¿åå·çæé½å¸é«æ°åºå¤©åºäºè¡198å·æ³¸å·èçªå¤§å¦1903</p> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>ç©æµèç³»æ¹å¼ï¼1898206037</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\tèå¯ <img src=\"images/JT-1.png\" />\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementOne\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\"></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">16:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeOne TitleBg\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<p>æ¨çè®¢åå·²ç»åå¤åºåºï¼æ­£å¨ç»è¿åå·çæé½å¸é«æ°åºå¤©åºäºè¡198å·æ³¸å·èçªå¤§å¦1903</p> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>ç©æµèç³»æ¹å¼ï¼1898206037</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>èå¯</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementOne\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor \"></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">16:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeOne TitleBg\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne newsTwo\"><span>æ¨çè®¢åå·²ç»åå¤åºåºï¼</span> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span class=\"newsTwo_last\">ç©æµèç³»æ¹å¼ï¼1898206037</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>èå¯</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementTwo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\">2015-12-04</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">16:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeColor\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne newsTwo\"><span>æ¨çè®¢åå·²ç»åå¤åºåºï¼</span> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span class=\"newsTwo_last\">ç©æµèç³»æ¹å¼ï¼1898206037</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\tèå¯ <img src=\"images/JTï¼1.png\" />\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementOne dd\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\"></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">14:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeOne TitleBg\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"news\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<p>æ¨çè®¢åå·²ç»åå¤åºåºï¼æ­£å¨ç»è¿åå·çæé½å¸é«æ°åºå¤©åºäºè¡198å·æ³¸å·èçªå¤§å¦1903</p> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>ç©æµèç³»æ¹å¼ï¼1898206037</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>èå¯</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementOne dd\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\"></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">12:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeOne TitleBg\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne newsTwo\"><span>æ¨çè®¢åå·²ç»åå¤åºåºï¼</span> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span class=\"newsTwo_last\">ç©æµèç³»æ¹å¼ï¼1898206037</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>èå¯</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementTwo\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\">2015-12-04</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">16:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeColor\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne newsTwo\"><span>æ¨çè®¢åå·²ç»åå¤åºåºï¼</span> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span class=\"newsTwo_last\">ç©æµèç³»æ¹å¼ï¼1898206037</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\tèå¯ <img src=\"images/JTï¼1.png\" />\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementOne dd\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\"></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">16:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeOne TitleBg\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<p>æ¨çè®¢åå·²ç»åå¤åºåºï¼æ­£å¨ç»è¿åå·çæé½å¸é«æ°åºå¤©åºäºè¡198å·æ³¸å·èçªå¤§å¦1903</p> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span>ç©æµèç³»æ¹å¼ï¼1898206037</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>èå¯</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t<ul class=\"contentNews elementOne dd\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<li class=\"time\"><span class=\"stateFont fontColor\"></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span class=\"Hour\">16:00</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t<li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<ul class=\"change Title changeOne TitleBg\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"newsOne newsTwo\"><span>æ¨çè®¢åå·²ç»åå¤åºåºï¼</span> <span>è´§è¿åå·ï¼11176753698</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<span class=\"newsTwo_last\">ç©æµèç³»æ¹å¼ï¼1898206037</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>æ´¾è½¦</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>å·A2JJ13</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<li class=\"name\"><p>èå¯</p></li>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<!-- è®¢åè·è¸ªåºé¨åºå-->\r\n");
      out.write("\t\t\t\t\t<div class=\"fixed changeColor\">\r\n");
      out.write("\t\t\t\t\t\t<ul class=\"MarginLeft Font_Color\">\r\n");
      out.write("\t\t\t\t\t\t\t<li><p>æ¿è¿å</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t<span>ä¸­å½ç©æµæéå¬å¸</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t<li><p>è¿è¾æ¹å¼</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t<span>å¬è·¯</span></li>\r\n");
      out.write("\t\t\t\t\t\t\t<li><p>æ¹æ¬¡å·</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t<span>____</span></li>\r\n");
      out.write("\t\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<!-- è®¢åè·è¸ªåºé¨åºåç»æ-->\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<!--èç³»æ¹å¼-->\r\n");
      out.write("\t\t\t\t<div class=\"Call\">\r\n");
      out.write("\t\t\t\t\t<ul>\r\n");
      out.write("\t\t\t\t\t\t<li><img src=\"images/QQ-1.png\" /><a href=\"#\">3223026195</a><span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"images/QQ,1.png\" /><a href=\"#\">3223026195</a>\r\n");
      out.write("\t\t\t\t\t\t</span></li>\r\n");
      out.write("\t\t\t\t\t\t<li><img src=\"images/QQ-1.png\" /><a href=\"#\">3249334352</a><span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"images/QQ,1.png\" /><a href=\"#\">3249334352</a>\r\n");
      out.write("\t\t\t\t\t\t</span></li>\r\n");
      out.write("\t\t\t\t\t\t<li><img src=\"images/QQ-1.png\" /><a href=\"#\">1585563777</a><span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"images/QQ,1.png\" /><a href=\"#\">1585563777</a>\r\n");
      out.write("\t\t\t\t\t\t</span></li>\r\n");
      out.write("\t\t\t\t\t\t<li><img src=\"images/DH-1.png\" /><a href=\"#\">028-83377810</a><span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"images/DH,1.png\" /><a href=\"#\">028-83377810</a>\r\n");
      out.write("\t\t\t\t\t\t</span></li>\r\n");
      out.write("\t\t\t\t\t\t<li><img src=\"images/DH-1.png\" /><a href=\"#\">028-83377803</a><span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"images/DH,1.png\" /><a href=\"#\">028-83377803</a>\r\n");
      out.write("\t\t\t\t\t\t</span></li>\r\n");
      out.write("\t\t\t\t\t\t<li><img src=\"images/DH-1.png\" /><a href=\"#\">028-83377870</a><span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"images/DH,1.png\" /><a href=\"#\">028-83377870</a>\r\n");
      out.write("\t\t\t\t\t\t</span></li>\r\n");
      out.write("\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<!--èç³»æ¹å¼ç»æ-->\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<!--è·è¸ªåºåç»æ-->\r\n");
      out.write("\t<!--è®¢åä¿¡æ¯åºåç»æ-->\r\n");
      out.write("\r\n");
      out.write("\t<div id=\"global-bottom\">\r\n");
      out.write("\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t<div class=\"link\">\r\n");
      out.write("\t\t\t\t<a href=\"index.php\">ç½ç«é¦é¡µ</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a\r\n");
      out.write("\t\t\t\t\thref=\"IntroNews.php?tag=gywm\">å³äºæä»¬</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a\r\n");
      out.write("\t\t\t\t\thref=\"IntroNews.php?tag=ywlx\">ä¸å¡ç±»å</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a\r\n");
      out.write("\t\t\t\t\thref=\"News_List.php?tag=GuestBook\">å®¢æ·æå¡</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a\r\n");
      out.write("\t\t\t\t\thref=\"News_List.php?tag=xwzx\">æ°é»ä¸­å¿</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a\r\n");
      out.write("\t\t\t\t\thref=\"Intro.php?tag=lxwm\">èç³»æä»¬</a>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"copyright\">\r\n");
      out.write("\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\tå¬å¸å°åï¼<span style=\"FONT-FAMILY: å®ä½; FONT-SIZE: 14px\">åå·çæé½å¸</span><span\r\n");
      out.write("\t\t\t\t\t\tstyle=\"FONT-FAMILY: å®ä½; FONT-SIZE: 14px\">é«æ°åºå¤©åºäºè¡198å·æ³¸å·èçªå¤§å¦1903å®¤</span>\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t<br />\r\n");
      out.write("\t\t\t\t</p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<!--ç¬¬ä¸æ¹æä»¶-->\r\n");
      out.write("\t<!--å³ä¾§æ¼æµ®-->\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}