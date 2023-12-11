package cn.kun.afsp_.data;

import lombok.Data;

public class User {
    private Integer user_id;
    private String user_name;
    private String user_account;
    private String user_passwd;
    private String user_info;

    public void setUser_info(String user_info) {
        this.user_info = user_info;
    }

    public String getUser_info() {
        return user_info;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public String getUser_account() {
        return user_account;
    }

    public String getUser_passwd() {
        return user_passwd;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public void setUser_account(String user_account) {
        this.user_account = user_account;
    }

    public void setUser_passwd(String user_passwd) {
//        char chararr[] = user_passwd.toCharArray();
//        int length = chararr.length;
//        for(int i=0;i<length;i++){
//            chararr[i] += i;
//        }
        this.user_passwd = user_passwd;
    }
}