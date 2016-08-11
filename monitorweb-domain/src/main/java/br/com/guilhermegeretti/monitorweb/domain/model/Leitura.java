package br.com.guilhermegeretti.monitorweb.domain.model;
import gumga.framework.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Leitura")
//@Indexed
@Audited
@Entity
public class Leitura extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String device;
	private BigDecimal sensor1;
	private BigDecimal sensor2;
	private BigDecimal sensor3;

	public Leitura() {
	}

	public String getDevice() {
		return this.device;
	}
	public void setDevice(String device) {
		this.device = device;
	}

	public BigDecimal getSensor1() {
		return this.sensor1;
	}
	public void setSensor1(BigDecimal sensor1) {
		this.sensor1 = sensor1;
	}

	public BigDecimal getSensor2() {
		return this.sensor2;
	}
	public void setSensor2(BigDecimal sensor2) {
		this.sensor2 = sensor2;
	}

	public BigDecimal getSensor3() {
		return this.sensor3;
	}
	public void setSensor3(BigDecimal sensor3) {
		this.sensor3 = sensor3;
	}
}