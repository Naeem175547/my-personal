class var_keyword {
    public static void main(String[] args) {
        var x = "String";
        String str = "String";
        Object obj = "String";
        System.out.println(x == str);
        System.out.println(str == obj);
        System.out.println(x.replace("a", "b"));
        System.out.println(x.getClass());
    }
}