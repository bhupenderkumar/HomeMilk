package com.milk.dao;

import java.util.List;

import com.milk.consumer.MilkConsumer;

public interface IMilkDao {

     Boolean createUser(MilkConsumer milkConsumer);
     Boolean updateUser(MilkConsumer milkConsumer);
     Boolean deleteUser(MilkConsumer milkConsumer);
     Boolean createAttendance(List<MilkConsumer> milkConsumers);
     List<MilkConsumer> getAllMilkConsumer();
	
	
}
