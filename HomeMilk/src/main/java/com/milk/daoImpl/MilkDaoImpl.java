package com.milk.daoImpl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.milk.connections.Connections;
import com.milk.connections.HibernateUtil;
import com.milk.consumer.MilkConsumer;
import com.milk.dao.IMilkDao;

public class MilkDaoImpl implements IMilkDao {

	public Boolean createUser(MilkConsumer milkConsumer) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
		session.save(milkConsumer);
		session.getTransaction().commit();
		HibernateUtil.shutdown();
		return false;
	}

	public Boolean updateUser(MilkConsumer milkConsumer) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.update(milkConsumer);
		tx.commit();
		HibernateUtil.shutdown();
		return true;
	}

	public Boolean deleteUser(MilkConsumer milkConsumer) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.delete(milkConsumer);
		tx.commit();
		HibernateUtil.shutdown();
		return true;
	}

	public Boolean createAttendance(List<MilkConsumer> milkConsumers) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<MilkConsumer> getAllMilkConsumer() {
		Session session = Connections.getSession();
		String sql = "SELECT * from milkConsumer";
		SQLQuery query = session.createSQLQuery(sql);
		query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
		return query.list();

	}

}
