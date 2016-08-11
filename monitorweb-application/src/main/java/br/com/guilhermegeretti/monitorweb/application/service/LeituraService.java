package br.com.guilhermegeretti.monitorweb.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.guilhermegeretti.monitorweb.application.repository.LeituraRepository;
import br.com.guilhermegeretti.monitorweb.domain.model.Leitura;


@Service
public class LeituraService extends GumgaService<Leitura, Long> {

	private final LeituraRepository repository;

	@Autowired
	public LeituraService(LeituraRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
