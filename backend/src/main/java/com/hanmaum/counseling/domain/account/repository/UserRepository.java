package com.hanmaum.counseling.domain.account.repository;

import com.hanmaum.counseling.domain.account.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    boolean existsByEmailAndNickname(String email, String nickname);
}
