package com.milk.daoImpl;

import java.util.ArrayList;
import java.util.List;

import com.milk.consumer.MilkConsumer;
import com.milk.dao.IMilkDao;

public class MilkDaoImpl implements IMilkDao {

	public Boolean createUser(MilkConsumer milkConsumer) {
		// TODO Auto-generated method stub
		return false;
	}

	public Boolean updateUser(MilkConsumer milkConsumer) {
		// TODO Auto-generated method stub
		return false;
	}

	public Boolean deleteUser(MilkConsumer milkConsumer) {
		// TODO Auto-generated method stub
		return false;
	}

	public Boolean createAttendance(List<MilkConsumer> milkConsumers) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<MilkConsumer> getAllMilkConsumer() {
		// TODO Auto-generated method stub
		List<MilkConsumer> list = new ArrayList<MilkConsumer>();
		MilkConsumer consumer = new MilkConsumer();
		consumer.setAddress("ere");
		list.add(consumer);
		return list;
	}

}
