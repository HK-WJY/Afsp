package cn.kun.afsp_.mapper;

import cn.kun.afsp_.data.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
@Mapper
public interface UserMapper {
    @Select("SELECT * from user")
    List<User> findAll();

    @Insert("INSERT into user(user_name,user_account,user_passwd,user_info) VALUE (#{user_name},#{user_account},#{user_passwd},#{user_info})")
    int insert(User user);


}
