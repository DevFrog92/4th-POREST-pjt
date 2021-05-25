package com.hanmaum.counseling.utils;

import com.hanmaum.counseling.security.CustomUserDetails;
import org.springframework.security.core.Authentication;

public class AuthUtil {
    public static Long getIdFromAuthentication(Authentication authentication){
        return ((CustomUserDetails)authentication.getPrincipal()).getId();
    }
}
