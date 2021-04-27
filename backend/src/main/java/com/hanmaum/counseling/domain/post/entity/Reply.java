package com.hanmaum.counseling.domain.post.entity;

import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reply_id")
    private Long id;

    @Column(name = "writer_id")
    private Long writerId;

    @Column(name = "content", columnDefinition="TEXT")
    private String content;

    @OneToOne
    @JoinColumn(name = "letter_id")
    private Letter letter;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
