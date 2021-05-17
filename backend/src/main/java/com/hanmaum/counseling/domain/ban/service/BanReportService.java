package com.hanmaum.counseling.domain.ban.service;

import com.hanmaum.counseling.domain.ban.dto.BanReportDetailDto;
import com.hanmaum.counseling.domain.ban.dto.BanReportDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BanReportService {
    Long reportBan(BanReportDto report, Long reporterId);
    Long processBanReport(Long banReportId);
    Long cancelBanReport(Long banReportId);
    Page<BanReportDetailDto> getProceedingBanReports(Pageable pageable);
}
