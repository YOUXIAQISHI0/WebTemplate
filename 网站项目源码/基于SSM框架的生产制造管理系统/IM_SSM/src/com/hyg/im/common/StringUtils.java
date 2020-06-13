package com.hyg.im.common;


/**
 * 字符串实用类，进行字符串的相关操作。
 */
public final class StringUtils {
    /**
     * 空字符串数组
     */
    public static final String[] EMPTY_STRING_ARRAY = new String[0];
    /**
     * 空字符串
     */
    public static final String EMPTY = "";
    /**
     * 全角空格
     */
    public static final String EMPTY_QUAN = "　";

    /**
     * 将指定对象字符化，并返回转化结果。
     * 
     * @param obj
     * 			待字符化对象
     * 
     * @return	转化结果
     */
    public static String valueOf(Object obj) {
        return (obj == null) ? "" : obj.toString().trim();
    }

    /**
     * 判断字符串是否为null或""字符串
     * 
     * @param value
     * 			字符串（判断对象）
     * 
     * @return	如果为空或""，则返回true，否则返回false。
     * 
     */
    public static boolean isEmpty(String value){
        return (value == null || trim(value).equals(""));
    }

    /**
     * 判断字符串是否不为空或""。
     * 
     * @param value
     * 			字符串（判断对象）
     * 
     * @return	如果不为空或""，则返回true，否则返回false。
     * 
     */
    public static Integer getIntegerFromString(String value){
        return Integer.valueOf(isNotEmpty(value)?value:"0");
    }
    
    /**
     * 判断字符串是否不为空或""。
     * 
     * @param value
     * 			字符串（判断对象）
     * 
     * @return	如果不为空或""，则返回true，否则返回false。
     * 
     */
    public static boolean isNotEmpty(String value){
        return !isEmpty(value);
    }

    /**
     * 返回字符串的副本，忽略前导空白和尾部空白。
     * 如果传入的字符串为null，则返回空字符串。<p>
     * Examples:
     * <pre>
     * 	StringUtils.trimToEmpty(null)          = ""
     * 	StringUtils.trimToEmpty("")            = ""
     * 	StringUtils.trimToEmpty("     ")       = ""
     * 	StringUtils.trimToEmpty("abc")         = "abc"
     * 	StringUtils.trimToEmpty("    abc    ") = "abc"
     * </pre>
     * 
     * @param str
     * 			字符串
     * 
     * @return 移除了前导和尾部空白的字符串的副本。<br>
     * 			如果没有前导和尾部空白，则返回此字符串；如果字符串为null，则返回空字符串。
     */
    public static String trimToEmpty(String str) {
        return str == null ? EMPTY : trim(str);
    }
    
    /**
     * 根据指定的字符把数组连接起来，并返回连接成的新字符串。如果数组为NULL，则返回NULL。<p>
     * Examples:
     * <pre>
     * StringUtils.join(null, *)                = null
     * StringUtils.join([], *)                  = ""
     * StringUtils.join([null], *)              = ""
     * StringUtils.join(["a", "b", "c"], "--")  = "a--b--c"
     * StringUtils.join(["a", "b", "c"], null)  = "abc"
     * StringUtils.join(["a", "b", "c"], "")    = "abc"
     * StringUtils.join([null, "", "a"], ',')   = ",,a"
     * </pre>
     * 
     * @param array
     * 			数组
     * @param separator
     * 			连接用字符串
     * 
     * @return 连接成的新字符串
     * 
     */
    /*
    public static String join(Object[] array, String separator) {
        if (array == null) {
            return null;
        }
        return join(array, separator, 0, array.length);
    }
    */

    /**
     * 根据指定的字符把数组的某一部分连接起来，并返回连接成的新字符串。
     * 如果数组为NULL，则返回NULL；如果endIndex <= startIndex，则返回空字符串。<p>
     * 
     * @param array
     * 			对象数组
     * @param separator
     * 			连接用字符串
     * @param startIndex
     * 			连接的开始位置
     * @param endIndex
     * 			连接的结束位置
     * 
     * @return 连接成的新字符串
     */
    /*
    public static String join(Object[] array, String separator, int startIndex, int endIndex) {
        if (array == null) {
            return null;
        }
        if (separator == null) {
            separator = EMPTY;
        }
        int bufSize = (endIndex - startIndex);
        if (bufSize <= 0) {
            return EMPTY;
        }
        bufSize *= ((array[startIndex] == null ? 16 : array[startIndex].toString().length())
                        + separator.length());
        StrBuilder buf = new StrBuilder(bufSize);
        for (int i = startIndex; i < endIndex; i++) {
            if (i > startIndex) {
                buf.append(separator);
            }
            if (array[i] != null) {
                buf.append(array[i]);
            }
        }
        return buf.toString();
    }
    */

    /**
     * HTML编码（转义字符）处理。
     * 
     * @param s
     * 			字符串
     * 
     * @return 处理后的字符串
     */
    public final static String htmlEncode(String s) {
        return htmlEncode(s, true);
    }

    /**
     * Escape html entity characters and high characters (eg "curvy" Word quotes).
     * Note this method can also be used to encode XML.
     * 
     * @param s
     * 			the String to escape.
     * @param encodeSpecialChars
     * 			if true high characters will be encode other wise not.
     * 
     * @return the escaped string
     */
    private final static String htmlEncode(String s, boolean encodeSpecialChars) {
        if(s == null){
            s = "";
        }
        StringBuffer str = new StringBuffer();
        for (int j = 0; j < s.length(); j++) {
            char c = s.charAt(j);
            // encode standard ASCII characters into HTML entities where needed
            if (c < '\200') {
                switch (c) {
                case '"':
                    str.append("&quot;");
                    break;
                case '&':
                    str.append("&amp;");
                    break;
                case '<':
                    str.append("&lt;");
                    break;
                case '>':
                    str.append("&gt;");
                    break;
                default:
                    str.append(c);
                }
            }
            // encode 'ugly' characters (ie Word "curvy" quotes etc)
            else if (encodeSpecialChars && (c < '\377')) {
                String hexChars = "0123456789ABCDEF";
                int a = c % 16;
                int b = (c - a) / 16;
                String hex = "" + hexChars.charAt(b) + hexChars.charAt(a);
                str.append("&#x" + hex + ";");
            }
            //add other characters back in - to handle charactersets
            //other than ascii
            else {
                str.append(c);
            }
        }
        return str.toString();
    }
    /**
     * 去掉字符串的前后空格(包括全角、半角、日文等)
     * @param s
     * @return
     */
    public static String trim(String s){
    	if(s == null){
    		return "";
    	}
    	//去掉前后半角空格
    	return deepTrim(s.trim());
    }
    private static String deepTrim(String s ){
    	if(s.startsWith(EMPTY_QUAN)||s.endsWith(EMPTY_QUAN)){
    		return deepTrim(trimQuan(s)).trim();
    	}
    	return s.trim();
    }
    /**
     * 对全角空格进行处理
     * @param s
     * @return
     */
    private static String trimQuan(String s){
    	int len = s.length();
    	int start = 0;
    	char[] val = s.toCharArray();  

    	while ((start < len) && (val[start] == EMPTY_QUAN.charAt(0))) {
    		start++;
    	}
    	while ((start < len) && (val[len - 1] == EMPTY_QUAN.charAt(0))) {
    	    len--;
    	}
    	return ((start > 0) || (len < s.length())) ? s.substring(start, len).trim() : s.trim();
    }
    public static void main(String[] args) {
		String s = EMPTY+EMPTY_QUAN+EMPTY+EMPTY_QUAN+"hello"+EMPTY+EMPTY_QUAN+EMPTY+EMPTY_QUAN+"  "+"　"+"";
		System.out.println(trimToEmpty(s).length());
	}
}

