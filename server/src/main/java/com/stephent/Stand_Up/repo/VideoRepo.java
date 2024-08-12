package com.stephent.Stand_Up.repo;

import com.stephent.Stand_Up.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface VideoRepo extends JpaRepository<Video, Long> {
    List<Video> findByTitle(String title);
}
